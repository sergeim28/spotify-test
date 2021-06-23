const apiURL = 'https://api.spotify.com/v1/browse'

async function client(
  endpoint,
  { data, token, headers: customHeaders, ...customConfig } = {},
) {
  if (!token) return Promise.resolve();

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + token);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return window.fetch(`${apiURL}/${endpoint}`, requestOptions).then(async response => {
    if (response.status === 401) {
      // refresh the page for them
      window.location.assign(window.location)
      return Promise.reject({ message: 'Please re-authenticate.' })
    }
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export {client}
