FROM lambci/lambda:build-nodejs10.x

ARG AWS_REGION

RUN yum install -y \
    diffutils \
    fontconfig-devel \
    freetype-devel \
    gcc \
    gcc-c++ \
    libX11-devel \
    libXext-devel \
    libXrender-devel \
    libjpeg-devel \
    libpng-devel \
    make \
    openssl-devel \
    perl \
    zlib-devel \
    && yum clean all

COPY . .

#RUN npm install

RUN zip -9yr lambda.zip index.js wkhtmltopdf utils

#ENV PATH=:/var/task

#CMD aws lambda update-function-code --region ${AWS_REGION} --function-name htmlToPdf --zip-file fileb://lambda.zip

