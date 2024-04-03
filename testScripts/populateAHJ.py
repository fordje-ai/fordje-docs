import csv
import aiohttp
import asyncio

async def fetch(url, data, headers, session):
    async with session.post(url, json=data, headers=headers) as response:  # Example POST request
        return await response.text()

async def main():
  # URL of the API endpoint
  url = 'http://localhost/ahj/'
  headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer TokenGoesHere'
  }

  # Open the CSV file
  with open('us_cities.csv', mode='r') as file:
    # Create a CSV DictReader
    reader = csv.DictReader(file)
    count = 0
    # Iterate over the rows in the CSV file
    for row in reader:
      data = {
        "lat": float(row['LATITUDE']),
        "lon": float(row['LONGITUDE']),
        "name": row['CITY'],
        "stateCode": row['STATE_CODE']
      }
      # Make the POST request and store the response
      async with aiohttp.ClientSession() as session:
        response_text = await fetch(url, data, headers, session)
        print(response_text)

    
asyncio.run(main())