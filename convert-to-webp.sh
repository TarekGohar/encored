#!/bin/bash

# Script to convert all images (including HEIC) to WebP format
# Uses ImageMagick for conversion

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Counter for statistics
CONVERTED=0
SKIPPED=0
FAILED=0

echo "========================================"
echo "Image to WebP Converter"
echo "========================================"
echo ""

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null && ! command -v convert &> /dev/null; then
    echo -e "${RED}Error: ImageMagick is not installed.${NC}"
    echo "Install it using:"
    echo "  macOS: brew install imagemagick"
    echo "  Ubuntu/Debian: sudo apt-get install imagemagick"
    exit 1
fi

# Determine which command to use (magick or convert)
if command -v magick &> /dev/null; then
    CONVERT_CMD="magick"
else
    CONVERT_CMD="convert"
fi

echo "Using ImageMagick command: $CONVERT_CMD"
echo ""

# Configuration
IMAGES_DIR="public/images"
QUALITY=85  # WebP quality (0-100, higher is better quality but larger file)
DELETE_ORIGINALS=false  # Set to true to delete original files after conversion

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --delete-originals)
            DELETE_ORIGINALS=true
            shift
            ;;
        --quality)
            QUALITY="$2"
            shift 2
            ;;
        --dir)
            IMAGES_DIR="$2"
            shift 2
            ;;
        *)
            echo "Unknown option: $1"
            echo "Usage: $0 [--delete-originals] [--quality <0-100>] [--dir <directory>]"
            exit 1
            ;;
    esac
done

echo "Configuration:"
echo "  Directory: $IMAGES_DIR"
echo "  Quality: $QUALITY"
echo "  Delete originals: $DELETE_ORIGINALS"
echo ""
echo "Starting conversion..."
echo ""

# Find all image files (case insensitive)
find "$IMAGES_DIR" -type f \( \
    -iname "*.jpg" -o \
    -iname "*.jpeg" -o \
    -iname "*.png" -o \
    -iname "*.heic" -o \
    -iname "*.heif" -o \
    -iname "*.tiff" -o \
    -iname "*.tif" -o \
    -iname "*.bmp" -o \
    -iname "*.gif" \
\) | while read -r file; do
    # Get the directory and filename
    dir=$(dirname "$file")
    filename=$(basename "$file")
    filename_no_ext="${filename%.*}"
    
    # Output WebP filename
    output_file="$dir/${filename_no_ext}.webp"
    
    # Skip if WebP already exists and is newer than source
    if [ -f "$output_file" ] && [ "$output_file" -nt "$file" ]; then
        echo -e "${YELLOW}⊘ Skipping (already converted): $file${NC}"
        ((SKIPPED++))
        continue
    fi
    
    # Convert to WebP
    echo -e "${GREEN}→ Converting: $file${NC}"
    
    if [ "$CONVERT_CMD" = "magick" ]; then
        magick "$file" -quality "$QUALITY" -define webp:method=6 "$output_file" 2>/dev/null
    else
        convert "$file" -quality "$QUALITY" -define webp:method=6 "$output_file" 2>/dev/null
    fi
    
    # Check if conversion was successful
    if [ $? -eq 0 ] && [ -f "$output_file" ]; then
        # Get file sizes for comparison
        original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        new_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null)
        
        # Calculate size reduction
        if [ "$original_size" -gt 0 ]; then
            reduction=$(( 100 - (new_size * 100 / original_size) ))
            echo -e "${GREEN}✓ Success: $output_file (${reduction}% smaller)${NC}"
        else
            echo -e "${GREEN}✓ Success: $output_file${NC}"
        fi
        
        ((CONVERTED++))
        
        # Delete original if flag is set
        if [ "$DELETE_ORIGINALS" = true ]; then
            rm "$file"
            echo -e "${YELLOW}  Deleted original: $file${NC}"
        fi
    else
        echo -e "${RED}✗ Failed: $file${NC}"
        ((FAILED++))
        # Remove failed output file if it exists
        [ -f "$output_file" ] && rm "$output_file"
    fi
    
    echo ""
done

# Print summary
echo "========================================"
echo "Conversion Summary"
echo "========================================"
echo -e "${GREEN}Converted: $CONVERTED${NC}"
echo -e "${YELLOW}Skipped: $SKIPPED${NC}"
echo -e "${RED}Failed: $FAILED${NC}"
echo ""

if [ $FAILED -gt 0 ]; then
    echo -e "${RED}Note: Some conversions failed. This might be due to:${NC}"
    echo "  - Corrupted image files"
    echo "  - Missing HEIC support in ImageMagick"
    echo "  - File permission issues"
    echo ""
    echo "To add HEIC support on macOS:"
    echo "  brew install imagemagick --with-heic"
    echo ""
fi

if [ $CONVERTED -gt 0 ] && [ "$DELETE_ORIGINALS" = false ]; then
    echo -e "${YELLOW}Original files were kept. To delete them, run with --delete-originals${NC}"
fi

echo "Done!"

