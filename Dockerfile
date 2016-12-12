FROM ruby:2.2.6

EXPOSE 4000
WORKDIR /myapp

COPY Gemfile Gemfile.lock ./

RUN bundle install
