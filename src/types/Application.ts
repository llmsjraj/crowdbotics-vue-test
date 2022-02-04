export default interface Application {
  id: number,
  name: string,
  description: string,
  type: "Web" | "Mobile",
  framework: "Django" | "React Native",
  domain_name: string,
  screenshot: string,
  subscription: string,
  user: number,
  created_at: Date,
  updated_at: Date,
}
