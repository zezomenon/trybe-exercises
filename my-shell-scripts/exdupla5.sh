#!/bin/bash

echo "Insira um caminho de arquivo ou diretório:"
read CAMINHO

if [ -d "$CAMINHO" ]
then
    echo "O caminho $CAMINHO é um diretório"
elif [ -f $CAMINHO ]
then
    echo "O caminho $CAMINHO é um arquivo"
else
    echo "Qualquer arquivo"
fi    

echo `ls -l $CAMINHO`