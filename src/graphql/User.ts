const headers = {
	'Content-Type': 'application/json',
	'Accept': 'application/json',
	'Accept-Encoding': 'gzip, deflate, br',
	'Connection': 'keep-alive',
	'X-Requested-With': 'Repl.it',
	'Referrer': 'https://repl.it',
	'Origin': 'https://repl.it'
};

export default async function User(username: string) {
	let info = await fetch('https://repl.it/graphql', {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query:
        `{
          userByUsername(username: "${username}") {
            cycles: karma,
            firstName
            id
		        username
		        lastName
		        bio
		        isVerified
		        displayName
		        fullName
		        url
		        isLoggedIn
		        isSubscribed
		        timeCreated
		        isBannedFromBoards
		        isHacker
		        image
          }
        }`
		})
	}).then(info => info.json())
	
	// Log the data. Be sure to add '.data.userByUsername' to 'info' so that unneccesary stuff isn't visible
  info.data.userByUsername.url = "https://replit.com" + info.data.userByUsername.url
  return info.data.userByUsername
};

