require 'sinatra'
require 'erb'

# Web Pages #
#############

get '/' do
  erb( :index )
end


# AJAX Results #
################

post '/search_results' do
  response['Access-Control-Allow-Origin'] = '*' # this allows AJAX from Jekyll pages
  #headers 'Access-Control-Allow-Origin' => '*'
  @search = params['search']
  erb( :search_results )
end


post '/shopping_lists/list/:verb' do |verb|
  content_type :json
  response['Access-Control-Allow-Origin'] = '*' # this allows AJAX from Jekyll pages
  content = {status: 'success', message: ''}
  name = params['name']

  if verb == 'rename_error'
    content = {status: 'failure', message: 'Simulated failure message.'}
    halt 500
  elsif (verb == 'Create' || verb == 'Rename') && name == ''
    content = {status: 'failure', message: 'Name is a required field, but was left blank.'}
  end

  content.to_json
end



# Helpers #
###########


# req_error will take the name of a field, and return an errormessage if it's blank
#
# Example Usage: req_error('first-name')
def req_error(name)
  @errors << "The field <strong>#{humanize_file_name(name)}</strong> is required, but was left blank." if( params["#{name}"].nil? || params["#{name}"] == '' )
end

# slug_it will take a given title (My & Title5:) and:
#
# - downcase it (my & title5:)
# - replace one or more white space characters with a - (my-&-title5:)
# - replace non letters/number characters with nothing (my--title5)
# - replace multiple occurrences of - with a single - (my-title5)
def slug_it(text)
  text.downcase.gsub(/\s+/, '-').gsub(/[^a-z0-9_-]/, '').squeeze('-')
end

# titleize will take a give string of text and capatalize each word.
#
# Does about the same thing as the Rails titleize string method.
def titleize(text)
  text.split(/ |\_/).map(&:capitalize).join(" ")
end

# friendly_file_names will take a given name (Some_file__name.md.erb) and:
#
# - replace one or more underscore characters with a space (Some file  name.md.erb)
# - remove markdown extension `.md` (Some file  name.erb)
# - remove ERB extension `.erb` (Some file  name)
# - replace multiple occurrences of space with a single space (Some file name)
def humanize_file_name(name)
  name.gsub(/_/, ' ').gsub('.md', '').gsub('.erb', '').squeeze(' ')
end


