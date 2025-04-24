import os
import datetime

# Path to the directory
directory_path = r"C:\Users\User\Documents\GitHub\decoy_website\src\projects"

# Get today's date
current_date = datetime.datetime.now().strftime('%Y-%m-%d')

# Iterate over all files in the directory
for filename in os.listdir(directory_path):
    if filename.endswith(".html"):
        filepath = os.path.join(directory_path, filename)
        
        # Read the file contents
        with open(filepath, 'r', encoding="utf-8") as file:
            content = file.read()
            
            # Replace the placeholder with the current date
            updated_content = content.replace("<!-- DATE -->", current_date)
        
        # Write the updated content back to the file
        with open(filepath, 'w', encoding="utf-8") as file:
            file.write(updated_content)

print("Date updated in all HTML files!")