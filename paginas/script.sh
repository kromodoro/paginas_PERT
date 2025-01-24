#!/bin/bash

for counter in $(seq 3 9); do
    cat 002.html > "00${counter}.html"
    sed -i "s/00${((counter-=1))}.html/00${((counter+=1))}.html/" "00${counter}.html";
done