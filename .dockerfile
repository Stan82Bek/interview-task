FROM jenkins/jenkins:lts

# Switch to root to install packages
USER root

# Install Node.js and npm
RUN apt-get update && \
    apt-get install -y curl gnupg2 lsb-release && \
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean

# Switch back to Jenkins user
USER jenkins