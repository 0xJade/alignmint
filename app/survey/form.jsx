import Select from 'react-select';
import React, { useState } from 'react';

export function Survey() {

  const [interests,setInterests] = useState([])
  const onSubmit = e => {
    e.preventDefault()
    // decide what backend to submit this
    // elastic search
    // kibana
    // elk
    console.log(interests.map(({label})=>label));
  };
  console.log(interests)
  const options = [
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

  return (
    <form onSubmit={onSubmit}>
      <label>
        Select Top 3 Interests in Web3:
        <Select
            isMulti
            id="interests"
            onChange={e=>{setInterests(e);console.log(e)}}
          options={options}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
