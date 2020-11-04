#!/bin/bash

VARIAVEL=`whoami`
echo $VARIAVEL

VARIAVEL=whoami
echo $VARIAVEL

VARIAVEL="Eu sou um usuário"
echo $VARIAVEL

VARIAVEL="Eu estou logado como `whoami`"
echo $VARIAVEL

VARIAVEL="Eu estou logado como whoami"
echo $VARIAVEL


#testando input com read
echo "Informe sua idade"
read IDADE
echo "Sua idade é $IDADE anos"

#read sem echo antes
read -p "Qual seu nome? " NOME
echo "Meu nome é" $NOME

