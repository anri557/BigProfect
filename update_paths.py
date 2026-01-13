import os
import re

# Directory containing your .html files
directory = "./"  # Adjust this to your project folder

# Regex to find href and src attributes
pattern = re.compile(r'(href|src)="(/[^"]+)"')

def update_paths_in_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Replace absolute paths with relative paths
    updated_content = pattern.sub(r'\1="./\2"', content)
    
    # Write back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(updated_content)

# Iterate through all .html files in the directory
for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith(".html"):
            update_paths_in_file(os.path.join(root, file))

print("Paths updated successfully!")