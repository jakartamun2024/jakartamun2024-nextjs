import React, { useEffect, useState } from "react";

interface PressItem {
  image_link: string;
  title: string;
  // Add other properties if applicable
}

export default function News() {
  const [data, setData] = useState<PressItem[] | null>(null);
  const [forceFetch, setForceFetch] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/admin-page/get-press/?forceFetch=${forceFetch}`);

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const fetchedData: PressItem[] = await res.json();
        console.log(fetchedData);
        setData(fetchedData);
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
      }
    };

    fetchData();
  }, [forceFetch]); // Add forceFetch as a dependency to trigger re-fetch when it changes

  useEffect(() => {
    // Set up an interval to trigger the fetch every 1 minute
    const intervalId = setInterval(() => {
      setForceFetch((prevForceFetch) => prevForceFetch + 1);
    }, 60000); // 60000 milliseconds = 1 minute

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {data ? (
        data.map((item: PressItem, index: number) => (
          <div key={index}>
            <img src={item.image_link} alt={`Image ${index}`} />
            <a href={item.title} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </div>
        ))
      ) : (
        <main>Loading...</main>
      )}
    </div>
  );
}
