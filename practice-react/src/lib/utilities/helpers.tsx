export default function ucFirst(str: string): string {

    if (!str) return str;
    else return str[0].toUpperCase() + str.slice(1)


}