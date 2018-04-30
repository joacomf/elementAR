#!/usr/bin/env bash

BASEDIR=`dirname ${BASH_SOURCE[0]} | xargs readlink -f`
NODEJS="~/herramientas/nodejs/node-v6.11.5-linux-x64"
PROYECT_NAME="ElementAR"

# NodeJS
NODEJS_HOME=$NODEJS
PATH=$NODEJS_HOME/bin:$PATH

# PS1
YELLOW='\e[33m'
DEFAULT='\e[39m'
PS1="$YELLOW$PROYECT_NAME$DEFAULT $PS1"

# Source additional script
ADDITIONAL_SCRIPT='.envrc'
if [[ -f $ADDITIONAL_SCRIPT ]]; then
    . $ADDITIONAL_SCRIPT
fi
