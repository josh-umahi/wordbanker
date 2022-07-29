export type Post = {
  _id?: string;
  word: string;
  creator?: string;
  definition: string;
  partOfSpeech: string;
  artistName: string;
  artistLink: string;
  selectedFile:any ;
  pronunciation?:string;
  username?:string;
  likes?: Array<any>;

};

