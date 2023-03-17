#!/bin/bash
set -e

echo "#############  Build in progress... #############"
npm run build
clear
echo "#############  Build done #############"
echo ""
echo "#############  Migration in progress... #############"
npm run typeorm migration:run
clear
echo "#############  Migration done #############"
echo ""
echo "#############  Build in progress... #############"
npm run build
clear
echo "#############  Build done #############"
echo ""