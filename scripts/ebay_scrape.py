import subprocess, re, time, json
s = open('/tmp/2eda1d.html', encoding='utf-8', errors='ignore').read()
ids = []
for i in re.findall(r'ebay\.com/itm/(\d+)', s):
    if i not in ids: ids.append(i)
results = []
for iid in ids:
    out = subprocess.run(['curl','-sL','--max-time','20',
        '-H','User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36',
        '-H','Accept-Language: en-US,en;q=0.9',
        f'https://www.ebay.com/itm/{iid}'], capture_output=True, text=True).stdout
    title = re.search(r'<meta property="og:title" content="([^"]+)"', out)
    price = re.search(r'"price":\s*"?([\d,]+\.\d{2})', out) or re.search(r'US\s*\$([\d,]+\.\d{2})', out)
    sold = re.search(r'([\d,]+)\s*\+?\s*sold', out, re.I)
    oos = 'OUT' if re.search(r'(out of stock|agotado)', out, re.I) else 'IN?'
    results.append({'id': iid, 'price': price.group(1) if price else None,
                    'sold': sold.group(1) if sold else None,
                    'oos': oos, 'title': title.group(1)[:90] if title else None})
    print(json.dumps(results[-1], ensure_ascii=False), flush=True)
    time.sleep(2.0)
json.dump(results, open('/tmp/ebay_results.json','w'), ensure_ascii=False, indent=1)
print('DONE', len(results))
