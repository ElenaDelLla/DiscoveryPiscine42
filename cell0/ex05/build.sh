#!/bin/bash
if [ $# -gt 0 ]
then
        for i in $1 $2 $3
                do
                         mkdir "ex$i"
                done;
else
        echo "No arguments supplied"
fi
exit
