export type EnvironmentTemplate = {
  name: string
  domain: string
  branch: string
  composeFile: string
}

export type EnvironmentVariable = {
  key: string
  value: string
}

export type Environment = EnvironmentTemplate & {
  variables: EnvironmentVariable[]
}
