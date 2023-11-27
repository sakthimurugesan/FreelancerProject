import json
import random

# Predefined array of skills
skills_array =  [
  "Graphic Designer",
  "Web Developer",
  "Writer",
  "Digital Marketer",
  "Translator",
  "Virtual Assistant",
  "Video Editor",
  "Online Tutor",
  "Social Media Manager",
  "Mobile App Developer",
  "Illustrator",
  "Photographer",
  "E-commerce Specialist",
  "Consultant",
  "Voiceover Artist",
  "Transcriptionist",
  "Game Developer",
  "Data Entry Specialist",
  "Project Manager",
  "Legal Consultant"
]

qual= [
  "Graphic Design",
  "CS",
  "Journalism",
  "Digital Marketing",
  "Translation",
  "Administrative",
  "Film Production",
  "Education",
  "Marketing",
  "CS",
  "Fine Arts",
  "Photography",
  "Marketing",
  "Consulting",
  "Voiceover",
  "Transcription",
  "Game Development",
  "Data Entry",
  "Management",
  "Law"
]
# Function to generate random data
def generate_data(id):
    img_name = f"person ({id}).jpg"
    experience = random.randint(5, 9)
    email = f"person{id}@example.com"
    skills = random.sample(skills_array, 4)
    qualification=random.sample(qual,1)
    data = {
        "id": id,
        "img_name": img_name,
        "experience": experience,
        "email": email,
        "skills": skills,
        "qualification":qualification[0]
    }
    
    return data

# Generating 30 sets of data
data_list = [generate_data(id) for id in range(1, 31)]

# Writing data to a JSON file
with open("freelancer_data.json", "w") as json_file:
    json.dump(data_list, json_file, indent=2)

print("JSON file 'freelancer_data.json' created successfully.")
