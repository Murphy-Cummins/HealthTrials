import React, {useEffect, useState} from 'react';
import axios from 'axios';

const TrialItem = ({conditions}) => {
    //const [conditions, setConditions] = useState('');
    const [trials, setTrials] = useState([]);
    const [loading, setLoading] = useState(false);
    

    const fetchTrials = async (conditionsArray) => {
        setLoading (true);
        let allRows = [];

        for(const condition of conditionsArray){
            try {
                const url = `https://clinicaltrials.gov/api/v2/studies?query.cond=${encodeURIComponent(
                            condition
                            )}&pageSize=5&format=csv`;
                console.log('Fetching:', url);
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error(`HTTP error: ${response.status}`);
                }

                const text = await response.text();
                const rows = text.trim().split('\n');

                if(allRows.length > 0) {
                    allRows.push(...rows.slice(1));
                } else {
                    allRows.push(...rows);
                }

            } catch (error) {
                console.error(`Error fetching trials for ${condition}:`, error);
            }
        }

        const header = allRows[0];
        const filterRows = [header, ...allRows.slice(1).filter(row => {
            const cells = row.split(',');
            const id = cells[0]?.trim() || '';
            return id.startsWith('NCT');
        })]

        setTrials(filterRows);
        setLoading(false);

    };

        useEffect(() => {
            if (!conditions) return;

            const conditionArray = conditions
            .split(',')
            .map((c) => c.trim())
            .filter(Boolean);

            if (conditionArray.length > 0) {
                fetchTrials(conditionArray);
            }
        }, [conditions]);

          return (
    <div style = {{ fontFamily: 'Arial, sans-serif', fontSize: '14px'}}>
        <h3 style = {{ marginBottom: '10px'}}>Results</h3>

      {loading && <p>Loading trials...</p>}

      {!loading && trials.length > 1 && (
        <div style = {{ overflow: 'auto'}}>
          <table style = {{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '13px',
            border: '1px solid #ddd'
          }}>
            <thead style = {{ background: '#f0f0f0'}}>
                <tr>{trials[0].split(',').map((header, i) => (
                    <th key ={i} style = {{ padding: '6px', border: '1px solid #ddd', textAlign: 'left'}}>
                       {header}
                    </th>
                ))}
                </tr>
            </thead>
            <tbody>
                {trials.slice(1).map((row, idx) => (
                    <tr key = {idx}>
                        {row.split(',').map((cell, i) => (
                            <td key = {i} style = {{ padding: '6px', border: '1px solid #eee'}}>
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      {!loading && trials.length <= 1 && conditions && (
        <p style = {{ color: 'gray' }}>No trials found for the entered conditions.</p>
      )}
    </div>
  );

};
export default TrialItem;