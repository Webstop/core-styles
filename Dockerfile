FROM ruby:2.4.2

EXPOSE 4000
WORKDIR /myapp

COPY Gemfile Gemfile.lock ./

RUN bundle install
