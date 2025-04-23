import { useEffect, useState } from 'react'

const useGetData = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortController = new AbortController()
    fetch(url, {
      method: 'GET',
      signal: abortController.signal
    })
    //continuing with the request response
    .then(res => {
      if(!res.ok){
        throw Error('Could not fetch the requested resource')
      }
      return res.json()
    })
    //Continuing with the json data
    .then(data => {
      setData(data)
      setError(null)
      setIsLoading(false)
    })
    .catch(err => {
      if(err.name === 'AbortError'){
        console.log('Fetching stopped')
      }
      console.log(err)
      setError(err.message)
      setIsLoading(false)
    })

    // return () => abortController.abort();
  }, [url])

  return {data, isLoading, error}
}

export default useGetData