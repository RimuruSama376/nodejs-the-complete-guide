'use client'
import React, { useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/');
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={fetchData} style={{backgroundColor: 'red', padding: '5px', border: '1px blue solid', borderRadius: '10px'}}>Press here</button>
      {data && <p>{data.msg}</p>}
    </main>
  );
}
