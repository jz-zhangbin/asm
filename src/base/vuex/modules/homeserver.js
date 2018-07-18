import axios from '@axios'

export function CountryInit() { 
	return axios.get('/api/v1/IntellSearchApi/Index/GetNationList')
}

export function UserSignType() {
	return axios.get('/api/v1/IntellSearchApi/Index/GetUserLoginStatus')
}

export function IsManager () { 
	return axios.get('/api/v1/IntellSearchApi/UserInfo/IsManager')
}