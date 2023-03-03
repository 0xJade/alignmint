import Select from 'react-select';
import React, { useState } from 'react';

export function Survey() {

  const [coreValues,setCoreValues] = useState([])
  const [interests,setInterests] = useState([])
  const [freeTime,setFreeTime] = useState([])

  const onSubmit = e => {
    e.preventDefault()
    // decide what backend to submit this
    // elastic search
    // kibana
    // elk
    console.log(interests.map(({label})=>label));
    console.log(coreValues.map(({label})=>label));
    console.log(freeTime.map(({label})=>label));
  

  };

  console.log(coreValues)
  console.log(interests)
  // console.log(freeTimeHobbies)

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

      const freeTimeOptions = [
        { value: 'learn', label: 'Reading books or articles' },
        { value: 'entertainment', label: 'Watching movies or TV shows' },
        { value: 'connection', label: 'Spending time with family and friends' },
        { value: 'hobbies', label: 'Engaging in hobbies such as painting, writing, or playing music' },
        { value: 'travel', label: 'Traveling to new places and exploring the world' },
        { value: 'exercise', label: 'Exercising or playing sports' },
        { value: 'food', label: 'Trying out new restaurants or cooking at home' },
        { value: 'game', label: 'Playing video games or board games' },
        { value: 'relax', label: 'Relaxing and taking time for self-care activities such as meditation or yoga' },
        { value: 'volunteer', label: 'Volunteering or giving back to the community' },

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
      <label>
      <br></br>
        What are your top 3 ways you spend your free time?
        <br></br>
        <Select
            isMulti
            id="freeTime"
            onChange={e=>{setFreeTime(e);console.log(e)}}
          options={freeTimeOptions}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
