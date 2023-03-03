import Select from 'react-select';
import React, { useState } from 'react';

export function Survey() {

  const [coreValues,setCoreValues] = useState([])
  const [interests,setInterests] = useState([])
  const onSubmit = e => {
    e.preventDefault()
    // decide what backend to submit this
    // elastic search
    // kibana
    // elk
    console.log(interests.map(({label})=>label));
    console.log(coreValues.map(({label})=>label));

  };

  console.log(coreValues)
  console.log(interests)

  /* List main sectors in Web3 */
  const interestOptions = [
    { value: 'cryptocurrency', label: 'Cryptocurrency' },
    { value: 'defi', label: 'DeFi' },
    { value: 'nfts', label: 'NFTs' },
    { value: 'smps', label: 'Smart Contract Platforms' },
    { value: 'infrastructure', label: 'Infrastructure' },
    { value: 'privacy', label: 'Privacy' },
    { value: 'gaming and entertainment', label: 'Gaming and Entertainment' },
    { value: 'identity and authentication', label: 'Identity and Authentication' },
    { value: 'energy and sustainability', label: 'Energy and Sustainability' },
    ];

    const valuesOptions = [
      { value: 'relationships', label: 'Family and relationships with loved ones' },
      { value: 'fulfillment', label: 'Happiness and fulfillment' },
      { value: 'security', label: 'Financial security and stability' },
      { value: 'health', label: 'Health and well-being' },
      { value: 'growth', label: 'Personal growth and self-improvement' },
      { value: 'love', label: 'Love and companionship' },
      { value: 'success', label: 'Success and achievement' },
      { value: 'learning', label: 'Learning and knowledge acquisition' },
      { value: 'Spirituality or faith', label: 'Spirituality or faith' },
      ];

  return (
    <form onSubmit={onSubmit}>
      <label>
        What are your top 3 interests in Web3?
        <br></br>
        <Select
            isMulti
            id="interests"
            onChange={e=>{setInterests(e);console.log(e)}}
          options={interestOptions}
        />
      </label>
      <label>
        <br></br>
        What do you believe are the top 3 most important things in life?
        <br></br>
        <Select
            isMulti
            id="coreValues"
            onChange={e=>{setCoreValues(e);console.log(e)}}
          options={valuesOptions}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
