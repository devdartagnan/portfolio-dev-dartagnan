import React from 'react'


type Props = {
  fsSubmit: () => void;
  data: [{}]
};

export default function Dashboard({ data, fsSubmit }: Props) {
  const [details, setDetails] = React.useState({
    id: '',
    data: '',
    cardDescription: {
      en: '',
      pt: ''
    },
    titulo: {
      en: '',
      pt: ''
    },
    tag: [
      ''
    ],
    thumb: '',
    altImage: '',
    altPage: {
      contentImages: [
        ''
      ],
      projectUrl: '',
      repoUrl: ''
    }
  })
  const saveData = async () => {
    const response = await fetch('/api/storeJSONData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: "Lorenzo", email: "lo@lorenzozar.com" })
    });
    const data = await response.json();
  }
  function handleEvent(e: any) {
    const name = e.target.name;
    const value = e.target.value;
    setDetails((prev: any) => {
      return { ...prev, [name]: value }
    })
  }

  return (
    <form>
      <input required aria-label='id' name='id' type="text" onChange={handleEvent} />
      <input required aria-label='data' name='data' type="text" onChange={handleEvent} />
      {/* <input required aria-label='en' name='en' type="text" onChange={handleEvent} />
      <input required aria-label='pt' name='pt' type="text" onChange={handleEvent} />
      <input required aria-label='en' name='en' type="text" onChange={handleEvent} />
      <input required aria-label='pt' name='pt' type="text" onChange={handleEvent} />
      <input required aria-label='thumb' name='thumb' type="text" onChange={handleEvent} />
      <input required aria-label='altImage' name='altImage' type="text" onChange={handleEvent} />
      <input required aria-label='contentImages' name='contentImages' type="text" onChange={handleEvent} />
      <input required aria-label='projectUrl' name='projectUrl' type="text" onChange={handleEvent} />
      <input required aria-label='repoUrl' name='repoUrl' type="text" onChange={handleEvent} />
      <input required aria-label='name' name='name' type="text" onChange={handleEvent} /> */}
      <button type='submit' onSubmit={fsSubmit}>Submit</button>
    </form>
  )
}


