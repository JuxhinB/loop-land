import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";

type Strings = LocalizedStringsMethods & {
  LABEL: any;
  ACTION: any;
  MESSAGE: any;
  ERROR: any;
  module: {
    footer: any;
    header: {
      menu: {
        home: string;
        about: string;
        gallery: string;
        crew: string;
        contact: string;
      };
    };
  };
  screen: {
    home: {
      hero: any;
      calendar: any;
      info: any;
      teamMembers: {
        title: string;
        subtitle: string;
        filter: {
          all: string
          trim: string
          tactic: string
          helmsman: string
          loadMore: string
        }
      }
    };
  };
};

let strings: Strings = new LocalizedStrings({
  en_US: require("./translations/en_US.json"),
});

export default strings;
