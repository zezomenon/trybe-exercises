#!/bin/bash

CAMINHO=$1

if [ -d "$CAMINHO" ]
then
    echo "O caminho $CAMINHO é um diretório e tem `ls -l $CAMINHO | wc -l` arquivos dentro dele"

else
    echo "O caminho $CAMINHO não é um diretório"
fi    

# echo `ls -l $CAMINHO`