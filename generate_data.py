import string
import re
import csv

filename = "traindata.csv"

data = []

fh = open("medical.txt", encoding="utf-8")

food_or_drinks_keywords = ['hungry', 'food', 'drink', 'thirsty', 'eating', 'eat', 'drinking', 'craving', 'cuisine']
transport_keywords = ['fetch', 'uber', 'taxi', 'bus', 'appointment', 'get to']
medical_keywords = ['medicine', 'pain', 'hurt', 'paracetamol', 'doctor', 'pharmacy', 'nurse', 'medical examination', 'fever']
entertainment_keywords = ['fun', 'play', 'game', 'joke']
emotion_keywords = ['happy', 'sad', 'angry', 'frustrated', 'cry', 'emotional', 'depressed']

for line in fh:
    with open(filename, 'w', encoding="utf-8") as csvfile:
        csvwriter = csv.writer(csvfile)


        for l in re.split(r"\.|\?|\!", line):

            tmp_list = l.split(" ")

            if any(i in tmp_list for i in food_or_drinks_keywords):
                data.append([l, 'food'])
            if any(i in tmp_list for i in transport_keywords):
                data.append([l, 'transport'])
            if any(i in tmp_list for i in medical_keywords):
                data.append([l, 'medical'])
            if any(i in tmp_list for i in entertainment_keywords):
                data.append([l, 'entertainment'])
            if any(i in tmp_list for i in emotion_keywords):
                data.append([l, 'emotion'])

        csvwriter.writerows(data)


