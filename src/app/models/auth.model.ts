export interface AuthModel {
  email: string,
  password: string,
  personal_data_access?: boolean
}

export interface ResponseAuthModel {
  data: {
    access_token: string
  }
}
