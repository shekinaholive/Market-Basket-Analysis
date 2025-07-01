with open('/content/fp_out_tamil_unique.csv', 'r') as file1:
    reader1 = csv.reader(file1)
    data1 = list(reader1)
with open('/content/fp_out_unique.csv', 'r') as file2:
    reader2 = csv.reader(file2)
    data2 = list(reader2)
combined_data = data1 + data2
with open('fp_combined.csv', 'w', encoding='utf-8-sig', newline='') as combined_file:
    writer = csv.writer(combined_file)
    for row in combined_data:
        writer.writerow(row)