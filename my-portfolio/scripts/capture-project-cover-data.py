from pathlib import Path
import csv, json, math, hashlib
import pandas as pd
import networkx as nx
project=Path(__file__).resolve().parents[1]
base=project.parent.parent
out=project/'scripts/project-cover-data/snapshot.json'
refs={}
def source(rel):
 p=base/rel
 refs[rel]=hashlib.sha256(p.read_bytes()).hexdigest()
 return p
with source('systematic-portfolio/runs/demo-monthly/equity.csv').open() as f: equity=list(csv.DictReader(f))
manifest=json.loads(source('systematic-portfolio/runs/demo-monthly/manifest.json').read_text())
assert manifest['data_source']=='Synthetic data, seed=42'
chosen=equity[::5]
if chosen[-1]!=equity[-1]:chosen.append(equity[-1])
series=[{'date':r['date'],'strategy':round(float(r['momentum'])/float(equity[0]['momentum'])*100,4),'benchmark':round(float(r['equal_weight'])/float(equity[0]['equal_weight'])*100,4)} for r in chosen]
with source('bt-4012-project-2026/reports/baf-study-v1/monthly.csv').open() as f: monthly=[{'month':int(r['month']),'prevalence':float(r['prevalence'])*100,'applications':int(r['rows'])} for r in csv.DictReader(f)]
assert [r['month'] for r in monthly]==list(range(7))
tags=['N','V','A','R','D','P','O','^']
trans={}
for row in source('pos-tagger/project_files/trans_probs.txt').read_text().splitlines():
 a,b,v=row.split('\t'); trans[(a,b)]=float(v)
matrix=[[trans[a,b] for b in tags] for a in tags]
# Match the documented figure's step and deterministic spring-layout recipe.
train_path=source('bt-4012-competition-2026/data/train.parquet')
tr=pd.read_parquet(train_path,columns=['txId','time_step','label'])
sub=tr[tr.time_step==28].set_index('txId')
edges=pd.read_csv(source('bt-4012-competition-2026/data/txs_edgelist.csv'))
edges=edges[edges.txId1.isin(sub.index)&edges.txId2.isin(sub.index)]
g=nx.Graph();g.add_nodes_from(sub.index);g.add_edges_from(edges.itertuples(index=False,name=None))
pos=nx.spring_layout(g,seed=4,k=1.4/math.sqrt(len(g)),iterations=120)
ids=list(g);idx={n:i for i,n in enumerate(ids)}
nodes=[{'x':round(float(pos[n][0]),6),'y':round(float(pos[n][1]),6),'kind':'illicit' if sub.at[n,'label']==1 else 'licit' if sub.at[n,'label']==0 else 'unknown'} for n in ids]
# These three values come from the final causal-model OOS table, not legacy exploration.
readme=source('c-finance/README.md').read_text()
for row in ['| 0 bps | 1.33% / 0.80 | 1.09% / 0.35 |','| 5 bps | 0.44% / 0.27 | -0.74% / -0.22 |','| 10 bps | -0.43% / -0.25 | -2.54% / -0.79 |']: assert row in readme
snap={'sourceSha256':refs,'systematic':{'dataSource':manifest['data_source'],'start':equity[0]['date'],'end':equity[-1]['date'],'points':series},'baf':monthly,'pos':{'tags':tags,'matrix':matrix},'bitcoin':{'timeStep':28,'layoutSeed':4,'nodes':nodes,'edges':[[idx[a],idx[b]] for a,b in g.edges()]},'gdelt':[{'costBps':0,'oosCagr':1.09},{'costBps':5,'oosCagr':-.74},{'costBps':10,'oosCagr':-2.54}]}
out.write_text(json.dumps(snap,separators=(',',':'))+'\n')
print('Saved cover snapshot:',len(nodes),'anonymous graph nodes,',len(series),'synthetic demo observations, 7 development months and an 8×8 transition matrix.')
