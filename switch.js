let ch = prompt("Enter a Character", "Enter ......");
switch (ch) {
    // case 'a':
    //     document.write("A is Vowel");
    //     break;
    // case 'e':
    //     document.write("E is Vowel");
    //     break;
    // case 'i':
    //     document.write("I is Vowel");
    //     break;
    // case 'o':
    //     document.write("O is Vowel");
    //     break;
    // case 'u':
    //     document.write("U is Vowel");
    //     break;
    // default:
    //     document.write("Special Character");
    //     break;

    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        document.write(ch + " is Vowel");
        break;
    default:
        document.write("Special Character");
        break;
}