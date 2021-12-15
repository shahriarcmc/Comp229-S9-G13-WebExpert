// COMP229 - Fall 2021 - - Sec 09
// Group - 13
// WEbExpert
    

export class Survey {
    _id?: any;
    Title?: string;
    UserID?: string;
    Questions?: string[]
    Choices?: [string[]]
}

export class Survey_qc {
    _id?: any;
    SurveyID?: any;
    Question?: string;
    Choices?: string[]
}