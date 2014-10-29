rm -rf /src; true
git clone https://github.com/seanwritescode/swcblog.git /src
mv /tmp/prismic-configuration.js /src/server/config
cd /src && npm install
