import Select from 'react-select';
import React, { useState } from 'react';

export function Survey() {

  const [interests,setInterests] = useState([])
  const [coreValues,setCoreValues] = useState([])
  // const [causes,setCauses] = useState([])
  const [hobbies,setHobbies] = useState([])
  const [skills,setSkills] = useState([])
  const [neededSkills,setNeededSkills] = useState([])

  const onSubmit = e => {
    e.preventDefault()
    // decide what backend to submit this
    // elastic search
    // kibana
    // elk
    console.log(interests.map(({label})=>label));
    // console.log(causes.map(({label})=>label));
    console.log(coreValues.map(({label})=>label));
    console.log(hobbies.map(({label})=>label));
    console.log(skills.map(({label})=>label));
    console.log(neededSkills.map(({label})=>label));
  };

  console.log(interests)
  console.log(coreValues)
  // console.log(causes)
  console.log(hobbies)
  console.log(skills)
  console.log(neededSkills)

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

  const hobbiesOptions = [
    { value: 'learn', label: 'Reading books, articles, or listening to podcasts' },
    { value: 'entertainment', label: 'Watching movies or TV shows' },
    { value: 'connection', label: 'Engaging in creative activities such as drawing, painting, or writing' },
    { value: 'music', label: 'Listening to music or podcasts' },
    { value: 'travel', label: 'Traveling to new places and exploring the world' },
    { value: 'exercise', label: 'Exercising or playing sports' },
    { value: 'food', label: 'Trying out new restaurants or cooking at home' },
    { value: 'game', label: 'Playing video games or board games' },
    { value: 'relax', label: 'Relaxing and taking time for self-care activities such as meditation or yoga' },
    { value: 'social', label: 'Socializing with friends and family' },
    { value: 'outdoor', label: 'Engaging in outdoor activities such as hiking, camping, or gardening' },
    { value: 'volunteer', label: 'Volunteering or giving back to the community' },
  ];

  // const causesOptions = [
  //   { value: 'environment', label: 'Climate change and environmental sustainability' },
  //   { value: 'equality', label: 'Social justice and equality, including racial, gender, and LGBTQ+ equality' },
  //   { value: 'inequality', label: 'Poverty and income inequality' },
  //   { value: '', label: '' },
  //   { value: '', label: '' },
  //   { value: '', label: '' },
  //   { value: '', label: '' },
  //   { value: '', label: '' },
  //   { value: '', label: '' },
  //   { value: '', label: '' },
  // ];

  const skillsOptions = [
    { value: 'backend', label: 'Backend' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'design', label: 'Design' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'community', label: 'Community' },
  ];

  const neededSkillsOptions = [
    { value: 'backend', label: 'Backend' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'design', label: 'Design' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'community', label: 'Community' },
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
        What are your top 3 hobbies and/or activities?
        <br></br>
        <Select
            isMulti
            id="hobbies"
            onChange={e=>{setHobbies(e);console.log(e)}}
          options={hobbiesOptions}
        />
      </label>
      <label>
      <br></br>
        What skills do you have to buidl with?
        <br></br>
        <Select
            isMulti
            id="hobbies"
            onChange={e=>{setSkills(e);console.log(e)}}
          options={skillsOptions}
        />
      </label>
      <label>
      <br></br>
        What skills do you need to buidl with?
        <br></br>
        <Select
            isMulti
            id="hobbies"
            onChange={e=>{setNeededSkills(e);console.log(e)}}
          options={neededSkillsOptions}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
