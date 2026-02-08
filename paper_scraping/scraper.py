from paperscraper.pubmed import get_and_dump_pubmed_papers
from paperscraper.pdf import save_pdf_from_dump
import json

input_file = 'gi_studies.jsonl'
output_file = 'gi_studies_cleaned.jsonl'

# these can be changed 
diseases = ['Crohn\'s', 'IBS', 'Ulcerative Colitis', 'Leaky Gut']
factors = ['Vitamin D', 'Short-chain fatty acids', 'Probiotics', 'Cortisol']
query = [diseases, factors]

get_and_dump_pubmed_papers(query, output_filepath='gi_studies.jsonl', max_results=50) #change max_results to desired amount of papers

with open(input_file, 'r') as f_in, open(output_file, 'w') as f_out:
    for line in f_in:
        paper = json.loads(line)
        if 'doi' in paper and isinstance(paper['doi'], str):
            f_out.write(json.dumps(paper) + '\n')


save_pdf_from_dump(
    'gi_studies_cleaned.jsonl', 
    pdf_path='./papers_folder', 
    key_to_save='doi'
)