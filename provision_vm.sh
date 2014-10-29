apt-get update && apt-get upgrade
apt-get -y install docker.io
ln -sf /usr/bin/docker.io /usr/local/bin/docker
sed -i '$acomplete -F _docker docker' /etc/bash_completion.d/docker.io
source /etc/bash_completion.d/docker.io
