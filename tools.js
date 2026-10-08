window.WebEditTools={formatBytes(n){const u=['B','KB','MB','GB'];let i=0;while(n>=1024&&i<3){n/=1024;i++}return n.toFixed(1)+' '+u[i]}};
