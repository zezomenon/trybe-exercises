#!/bin/bash

CAMINHO=$1

if [ -d "$CAMINHO" ]
then
    echo "O caminho $CAMINHO é um diretório"
elif [ -f $CAMINHO ]
then
    echo "O caminho $CAMINHO é um arquivo"
else
    echo "Qualquer arquivo"
fi    

# echo `ls -l $CAMINHO`