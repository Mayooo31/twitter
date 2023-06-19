export type ContextType = {
  openMobileNavbar: boolean;
  setOpenMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  openMore: boolean;
  setOpenMore: React.Dispatch<React.SetStateAction<boolean>>;
  openWriteATweet: boolean;
  setOpenWriteATweet: React.Dispatch<React.SetStateAction<boolean>>;
  openThemeSettings: boolean;
  setOpenThemeSettings: React.Dispatch<React.SetStateAction<boolean>>;
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  loggedAccount: LoggedAcountType;
  setLoggedAccount: React.Dispatch<React.SetStateAction<LoggedAcountType>>;
  openEditProfile: boolean;
  setOpenEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
  previewImage: previewImageType;
  setPreviewImage: React.Dispatch<React.SetStateAction<previewImageType>>;
};

export type previewImageType = {
  selectedImage: number | undefined;
  images: any[];
};

export type ThemeType = {
  color: string;
  background: string;
  name: string;
  bgName: string;
};

export type LoggedAcountType = {
  token: string;
  id: string;
  nick: string;
  username: string;
  profilePhoto: string;
  secondPhoto: string;
  about: string;
  following: string[];
  followers: string[];
  bookmarks: string[];
  refetchAccountData: () => void;
};

export type EditedType = {
  name: string;
  about: string;
  image: any;
  bigImage: any;
  blobImage: string;
  blobBigImage: string;
};

export type AccountDataType = {
  about: string;
  age: number;
  bookmarks: string[];
  createdAt: string;
  email: string;
  followers: string[];
  following: string[];
  nick: string;
  profilePhoto: string;
  secondPhoto: string;
  tweets: TweetDataType[];
  username: string;
  _id: string;
};

export type TweetDataType = {
  tweet: string;
  image: string;
  createdBy: string;
  createdAt: string;
  comments: string[];
  likes: string[];
  retweets: string[];
  _id: string;
};

export type selectedType = "tweets" | "tweets and answers" | "media" | "likes";
