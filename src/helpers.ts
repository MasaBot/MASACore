export const prettyPrint = (data: Object) => {
  return JSON.stringify(data, null, 2);
}


export interface ServerMetadata {
  /**
   * The name of the minecraft server
   */
  name: string
  tag: string
  description: string
  /**
   * the command that starts the server. This runs inside the server folder
   */
  command: string
  /**
   * The directory where the server files are
   */
  directory: string,

  // Whether to show logs to the masa console
  logs?: boolean,

  backups?: {
    backupLimit: number,
    backupInterval: string | number,
  },
  advanced?: {
    welcomeMsg?: string
  }
}