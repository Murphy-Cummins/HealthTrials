import React, {useEffect, useState} from 'react';
import axios from 'axios';

const TrialItem = ({conditions}) => {
    //const [conditions, setConditions] = useState('');
    const [trials, setTrials] = useState([]);
    const [loading, setLoading] = useState(false);
    

    const fetchTrials = async (conditionsArray) => {
        setLoading (true);
        let allTrials = [];

        for(const condition of conditionsArray){
            try {
                const response = await axios.get('https://clinicaltrials.gov/api/query/study_fields', {
                    params: {
                        expr: condition,
                        fields: 'NCTId,BriefTitle,Condition,LocationCountry',
                        min_rnk: 1,
                        max_rnk: 10,
                        fmt: 'json'
                    }
                });

                console.log('API response for', condition, response.data);
                console.log(condition);

                //(`Calling: ${url}?${queryString}`)
                const studies = response.data.StudyFieldsResponse.StudyFields;
                //setTrials(studies);
                allTrials= [...allTrials, ...studies];
                alert(trials);
            } catch (error) {
                console.error(`Error fetching trials fo ${condition}:`, error);
                setTrials(allTrials);
            }
        }
        //setTrials(allTrials);
        setLoading(false);
        };

        useEffect(() => {
            if(!conditions) return;

            const conditionArray = conditions
            .split(',')
            .map((c)=> c.trim())
            .filter(Boolean);

            if (conditionArray.length >0) {
                fetchTrials(conditionArray);
            }

            fetchTrials();
        }, [conditions]);

        //commenting out irrelevent code
        //const handleSubmit = (e) => {
          //  e.preventDefault();
            //const conditionArray = conditions
            //.split(',')
            //.map((c)=>c.trim())
            //.filter(Boolean);

      //      if(conditionArray.length>0) {
     //           fetchTrials(conditionArray);
     //       }
     //   };

        return (
            <div>
                <h3>Search Clincical Trials</h3>

                {loading && <p>Loading trials...</p>}
                {!loading && (trials.length >0) && (
                    <ul>
                        {trials.map((trial, index) => (
                            <li key={index}>
                                <strong>
                                    {trial.BriefTitle?.[0]}
                                </strong><br/>
                                Condition: {trial.Condition?.join(', ') || 'N/A'} <br />
                                NCT ID: {trial.NCTId?.[0]}<br/>
                                Location: {trial.LocationCountry?.join(', ') || 'N/A'}
                            </li>
                        ))}
                    </ul>

                )}
                
                {!loading && trials.length === 0 && (
                    <p>No trials found for the enerted conditions.</p>
                )}
            </div>
        );
};

export default TrialItem;