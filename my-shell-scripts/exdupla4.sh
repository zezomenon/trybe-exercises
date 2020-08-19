#!/bin/bash

#ex4
VARCAMINHO="/home/israel/Documentos/aulashell_1_5"
if [ -e $VARCAMINHO  ]
then
    echo "O caminho $VARCAMINHO existe"
fi

if [ -w $VARCAMINHO ]
then
    echo "Você tem permissão para editar $VARCAMINHO"
else
    echo "Você não tem permissão"
fi    