import csv, os

print(os.getcwd())
opp_list = []
with open('./src/data/oldDB.csv', newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=",")
    for row in reader:
        opp_list.append([])

print(opp_list)