/*
ESSAY---------
I learned to iterate backwards for this assignment
Pledged Kai Kallingal
*/

#include <stdio.h>
#include <stdbool.h>
#include <ctype.h>
#include <string.h>


#define CHARLIM 100


bool check_pal(char * s);

int main(void) {
    printf("Enter text to check if it's a palindrome\n");
    char pal[CHARLIM];
    fgets(pal, sizeof(pal), stdin);
    char *endptr = strchr(pal, '\n');
    /*send error if too long*/
    if (endptr == NULL) {
        printf("Error: Line is too long");
        return 1;
    }
    *endptr = '\0';
    printf("input '%s'\n", pal);
    if (check_pal(pal)) {
        printf("'%s' is a palindrome \n",pal);
    } 
    else {
        printf("'%s' is NOT a palindrome\n", pal);
    }
}

bool check_pal(char * s) {
    char *lChar = s;
    /*get endline to go iterate backwards*/
    char *rChar = s + strlen(s) - 1;
    while (lChar < rChar) {
        /*ignore non chars*/
        while (!isalnum(*lChar) && (lChar < lChar+strlen(s))) {++lChar;}
        while (!isalnum(*rChar) && (rChar >= s)){--rChar;} 
        if (lChar >= rChar) {
            return true;
        }
        else if (tolower(*lChar) != tolower(*rChar)) {
            return false;
        }
        else {
            return false;}
        lChar++; 
        rChar--;
    }
    return true;
}