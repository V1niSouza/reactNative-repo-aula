export type RootStackParamList = {
    Home:undefined;
    Profile:{name:String};
    Settings:undefined;
}

declare global{
    namespace ReactNavigation{
        interface RootParamList extends RootStackParamList{}
    }
}